import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ItemRarity, ItemRarityDetail } from "../types/Reward";

export function useItemRarities() {
  const { data, loading, error } = useQuery(gql`
    query AllItemRarities {
      item_rarities {
        name
        color
      }
    }
  `);
  const parsedData = React.useMemo((): ItemRarityDetail[] => {
    if (loading || error) {
      return [];
    }
    if (!data || !Array.isArray(data.item_rarities)) {
      console.error("useItemRarities: expected array in response", data);
      return [];
    }
    return (data.item_rarities as any[]).map((e) => ItemRarityDetail.parse(e));
  }, [data]);
  return { data: parsedData, loading, error };
}

export function useItemRarityColors() {
  const { data, loading, error } = useItemRarities();
  const colors = React.useMemo(() => {
    const base: Record<ItemRarity, string> = {
      trash: "gray",
      common: "gray",
      uncommon: "gray",
      rare: "gray",
      very_rare: "gray",
      epic: "gray",
      artifact: "gray",
    };
    if (loading || error) {
      return base;
    }
    return data.reduce((rec, e) => {
      rec[e.name] = e.color;
      return rec;
    }, base);
  }, [data]);
  return { data: colors, loading, error };
}

export function useItemRarityColor(rarity: ItemRarity) {
  const { data, loading, error } = useItemRarityColors();
  return { data: data[rarity], loading, error };
}
