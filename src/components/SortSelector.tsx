import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  onSetSelectedSort: (sorting: string) => void;
}

const SortSelector = ({ selectedSort, onSetSelectedSort }: Props) => {
  const sortingItems: string[] = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort ? selectedSort : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingItems.map((item, index) => {
          return (
            <MenuItem key={index} onClick={() => onSetSelectedSort(item)}>
              {item}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
