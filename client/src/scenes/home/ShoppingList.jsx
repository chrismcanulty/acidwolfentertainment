import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from '../../components/Item';
import { setItems } from '../../state';

const ShoppingList = () => {
  const dispatch = useDispatch();
  // value for filter function
  const [value, setValue] = useState('all');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // grab item list and images we have created
  async function getItems() {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  const kaliSeries = items.filter(
    (item) => item.attributes.series === 'Kali the Werewolf'
  );
  const draculaCthuluSeries = items.filter(
    (item) =>
      item.attributes.series === 'Dracula Vs Cthulhu. Sortof And Other Stories'
  );

  console.log('🚀 ITEMS items:', items);

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="KALI THE WEREWOLF" value="kaliTheWerewolf" />
        <Tab
          label="DRACULA VS CTHULU... SORT OF AND OTHER STORIES"
          value="draculaVsCthuluSortOfAndOtherStories"
        />
      </Tabs>
      <Box
        margin="0 auto"
        // use grid display for responsive resizing based on screen size
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === 'all' &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'kaliSeries' &&
          kaliSeries.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'draculaCthuluSeries' &&
          draculaCthuluSeries.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
