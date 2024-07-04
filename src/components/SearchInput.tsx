import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (input: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant="filled"
        placeholder="Search games..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
