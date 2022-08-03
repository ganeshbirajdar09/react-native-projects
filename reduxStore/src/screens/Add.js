import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  H1,
} from 'native-base';

import propTypes from 'prop-types';

import shortid from 'shortid';
import {addSeason} from '../action/list';

const Add = ({navigation, addSeason}) => {
  // to hold name of the season and total no of the season
  const [name, setName] = useState('');
  const [totalNoSeason, setTotalNoSeason] = useState('');

  // to add the current season into list and then move to the home screen
  const handleSubmit = async () => {
    try {
      if (!name || !totalNoSeason) {
        return alert('Please add both fields');
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name,
        totalNoSeason,
        isWatched: false,
      };
      addSeason(seasonToAdd);
    } catch (error) {}
  };
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add To watch List</H1>

        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Season Name"
              value={name}
              style={{color: '#eee'}}
              onChangeText={text => setName(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Total number of season"
              value={totalNoSeason}
              style={{color: '#eee'}}
              onChangeText={text => setTotalNoSeason(text)}
            />
          </Item>
          <Button rounded block onPress={handleSubmit}>
            <Text>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

//TODO: Redux config
Add.prototype = {
  addSeason: propTypes.func.isRequired,
};

//TODO: Redux Export
export default Add;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
