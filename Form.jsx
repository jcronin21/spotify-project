import React from 'react';
import { Form, Input, Button } from 'antd';

const searchForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values); 
  };

  return (
    
    <Form onFinish={onFinish}>
     <h1 style={{ textAlign: 'center' }}>Jazz's Spotify & React Lab</h1>
      <Form.Item label="Search Term" name="searchTerm" rules={[{ required: true, message: 'Please enter an artist' }]}>
        <Input placeholder="Enter artist or song name" />
      </Form.Item>
      <Form.Item label="Number of Songs" name="numSongs" rules={[{ required: true, message: 'Please enter the number of songs (max: 20)' }]}>
        <Input type="number" min={1} max={20} placeholder="Enter number of songs" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default searchForm;
