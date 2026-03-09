import React from 'react';
import { Box, Wrap, WrapItem, Button } from '@chakra-ui/react';

interface FiltersProps {
  filter: string;
  categories: string[];
  setCategory: (category: string) => void;
}

export default function Filters({ filter, categories, setCategory }: FiltersProps) {
  return (
    <Box px={{ base: 4, md: 8 }} pb="40px">
      <Wrap spacing={2} justify="center" py={2}>
        {categories.map((category) => (
          <WrapItem key={category}>
            <Button
              onClick={() => setCategory(category)}
              className={filter === category ? 'filter-item__active' : 'filter-item__tag'}
              variant="ghost"
              borderRadius="full"
              px={4}
              py={1}
              minW="80px"
              maxW={{ base: '100%', sm: 'auto' }}
              whiteSpace="nowrap"
            >
              {category}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
