import List from '@/components/DataList';
import React from 'react';

const data = [
  {
    id: '1',
    name: 'Leon S. Kennedy',
    testName: 'Dengue',
    result: 'Negative'
  },
  {
    id: '2',
    name: 'Lara Croft',
    testName: 'Dengue',
    result: 'N/A'
  },
  {
    id: '3',
    name: 'Ash Ketchum',
    testName: 'Dengue',
    result: 'Negative'
  },
  {
    id: '4',
    name: 'Thomas Angelo',
    testName: 'Dengue',
    result: 'Positive'
  },
]

const Home = () => {
  return (
    <List data={data} />
  )

}

export default Home;