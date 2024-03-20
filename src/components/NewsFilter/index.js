import { Autocomplete, Box, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { sourceList } from '../../utils/constant'
import { useDispatch } from "react-redux";
import { GetNewsList } from "../../store/actions/NewsArticles";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

const NewsFilter = () => {
  const dispatch = useDispatch();

  const [selectedFilters, setSelectedFilters] = useState({
    search: '',
    category: null,
    source: {value: 'bbc-news', label: 'BBC News'},
    fromDate:  moment().subtract(7, 'days'),
    toDate: moment(),
    sortBy: '',

  });
  const handleChangeDropdown = (fieldName, option) => {
    setSelectedFilters({...selectedFilters, [fieldName]: option});
  }; 

  useEffect(() => {
    dispatch(
      GetNewsList({...selectedFilters , fromDate : moment(selectedFilters?.fromDate).format('YYYY-MM-DD') ,toDate : moment(selectedFilters?.toDate).format('YYYY-MM-DD') })
    );
  }, [dispatch, selectedFilters]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: 2,
        position: 'relative',
        gap: '16px',
        "&.MuiCard-root":{
          overflow:"visible"
        },
        '@media screen and (min-width: 300px) and (max-width: 1024px)': {
          maxWidth: '100%',
          flexDirection: 'column',
        },
      }}
    >
      <TextField
        onChange={(e) => setSelectedFilters({...selectedFilters, search: e.target.value})}
        sx={{
          height: '40px',
          width: 1,
          '& .MuiOutlinedInput-root': {
            height: '40px',
          },
          '& .MuiOutlinedInput-input': {
            p: '8.5px 14px',
          },
          '& .MuiInputLabel-root': {
            top: '-7px'
          },
          '& .MuiFormLabel-filled, & .Mui-focused': {
            top: 0
          },
          '& .MuiInputBase-root input::placeholder': {
            color: '#0D0D0D !important',
            opacity: 1,
          },
        }}
        id="main-search"
        label="Search news..."
        variant="outlined"
      />

    <Autocomplete
        id="format-select-demo"
        renderTags={(value, getTagProps) => (
          <Box
            sx={{
              borderRadius: '50px',
              background: 'white',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ml: selectedFilters?.sessionFormat?.length
                ? '35px !important'
                : '9px !important',
            }}
          >
            {value?.length}
          </Box>
        )}
        sx={{
          overflow: 'hidden',
          width: 300,
          minWidth: 300,
          height: 40,
          '& .MuiAutocomplete-inputRoot': {
            flexWrap: 'nowrap !important',
          },
          '& .MuiOutlinedInput-root': {
            height: 40,
          },
          '& input#format-select-demo::placeholder': {
            fontSize: '14px',
            fontFamily: 'Poppins-500',
            color: '#7283A4',
          },
          '& .MuiAutocomplete-endAdornment': {
            right: '13px !important',
            top: 'calc(50% - 0px)',
          },
          '@media screen and (min-width: 300px) and (max-width: 640px)': {
            width: '100%',
            minWidth: '100%',
          },
        }}
        value={selectedFilters?.source}
        options={sourceList}
        onChange={(ev, newValue) => handleChangeDropdown('source', newValue)}
        autoHighlight
        getOptionLabel={(option) => option?.label}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <Typography variant="body1" sx={{ ml: 1 }}>
              {`${option?.label}  `}
            </Typography>
          </Box>
        )}
        clearIcon={false}
        renderInput={(params) => (
          <div style={{ position: 'relative' }}>
            <TextField
              {...params}
              placeholder="Filter by Source"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
              sx={{
                color: '#7283A4',
                fontSize: '14px',
                fontFamily: 'Poppins-500',
                '& .MuiInputBase-root input::placeholder': {
                  color: '#0D0D0D !important',
                  opacity: 1,
                },
              }}
            />
          </div>
        )}
      />
      <Stack
        sx={{
          flexDirection: 'row',
          gap: '16px',
          '@media screen and (min-width: 300px) and (max-width: 640px)': {
            width: '100%',
            minWidth: '100%',
            flexDirection: 'column',
          },
        }}
      >
        <DatePicker className="date-picker-style" onChange={(date) => setSelectedFilters({...selectedFilters, fromDate: date})} value={selectedFilters?.fromDate} />
        <DatePicker className="date-picker-style" onChange={(date) => setSelectedFilters({...selectedFilters, toDate: date})} value={selectedFilters?.toDate} />
      </Stack>
    </Card>
  );
};

export default NewsFilter;
