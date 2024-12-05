#!/bin/bash

# Prompt for host and password
read -p "Enter ArangoDB host (default: http+tcp://127.0.0.1:8529): " host
host=${host:-http+tcp://127.0.0.1:8529}

read -s -p "Enter ArangoDB root password: " password
echo ""

# Define collections to import
collections=("characters" "quests" "notes" "has_child" "quest_character_edges" "note_edges")

# Iterate over collections and import data
for collection in "${collections[@]}"; do

  if [[ $collection == "has_child" || $collection == "quest_character_edges" || $collection == "note_edges" ]]; then
    file="${collection}.jsonl"
    echo "Importing ${file} into ${collection}..."
    arangoimport --file "${file}" \
      --collection "${collection}" \
      --type jsonl \
      --create-collection true \
      --create-collection-type edge \
      --server.endpoint "${host}" \
      --server.username "root" \
      --server.password "${password}"
  else
    file="${collection}.json"
    echo "Importing ${file} into ${collection}..."
    arangoimport --file "${file}" \
      --collection "${collection}" \
      --type json \
      --create-collection true \
      --server.endpoint "${host}" \
      --server.username "root" \
      --server.password "${password}"
  fi
done

echo "Seeding completed!"
