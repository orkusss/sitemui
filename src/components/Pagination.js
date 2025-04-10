import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function CustomPagination({ count, page, onChange }) {
  return (
    <Stack alignItems="center">
      <Pagination count={count} page={page} onChange={onChange} />
    </Stack>
  );
}

export default CustomPagination;