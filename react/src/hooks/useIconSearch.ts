import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Icon } from "../types/Icon";
import { uniqBy } from "lodash";

export function useIconSearch(searchTerm: string) {
  const { data, loading, error } = useQuery(
    gql`
      query SearchIcons($searchTerm: String!) {
        search_icons(args: { search: $searchTerm }) {
          name
          url
        }
      }
    `,
    { variables: { searchTerm } }
  );
  const icons = React.useMemo(() => {
    const iconResults = data?.search_icons;
    if (!Array.isArray(iconResults)) {
      return [];
    }
    return uniqBy(
      (iconResults as any[]).map((icon) => Icon.parse(icon)),
      "url"
    );
  }, [data]);
  return { data: icons, loading, error };
}
