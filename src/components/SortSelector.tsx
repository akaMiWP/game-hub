import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  onSetSelectedSort: (sorting: string) => void;
}

const SortSelector = ({ selectedSort, onSetSelectedSort }: Props) => {
  const sortingItems = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-created", label: "Created date" },
    { value: "-updated", label: "Updated data" },
    { value: "rating", label: "Ratings" },
  ];
  const item = sortingItems.find((item) => item.value == selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {item?.label ? item?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingItems.map((item, index) => {
          return (
            <MenuItem key={index} onClick={() => onSetSelectedSort(item.value)}>
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
