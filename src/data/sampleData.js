import { v4 as uuidv4 } from 'uuid';

// Sample cities
export const cities = [
  { id: 'city1', type: 'city', name: 'New York' },
  { id: 'city2', type: 'city', name: 'Los Angeles' },
  { id: 'city3', type: 'city', name: 'Chicago' },
  { id: 'city4', type: 'city', name: 'Miami' }
];

// Sample people
export const people = [
  { id: 'person1', type: 'person', name: 'John Doe', age: 25, cityId: 'city1' },
  { id: 'person2', type: 'person', name: 'Jane Smith', age: 30, cityId: 'city1' },
  { id: 'person3', type: 'person', name: 'Mike Johnson', age: 28, cityId: 'city2' },
  { id: 'person4', type: 'person', name: 'Sarah Wilson', age: 35, cityId: 'city2' },
  { id: 'person5', type: 'person', name: 'David Brown', age: 22, cityId: 'city3' },
  { id: 'person6', type: 'person', name: 'Emily Davis', age: 27, cityId: 'city3' },
  { id: 'person7', type: 'person', name: 'Chris Miller', age: 31, cityId: 'city4' },
  { id: 'person8', type: 'person', name: 'Lisa Garcia', age: 29, cityId: 'city1' }
];

// Create nodes for the graph (combining cities and people)
export const createNodes = () => {
  const cityNodes = cities.map(city => ({
    id: city.id,
    type: 'city',
    name: city.name,
    symbolType: 'square',
    color: '#4CAF50',
    size: 400
  }));

  const personNodes = people.map(person => ({
    id: person.id,
    type: 'person',
    name: person.name,
    age: person.age,
    cityId: person.cityId,
    symbolType: 'circle',
    color: '#2196F3',
    size: 200
  }));

  return [...cityNodes, ...personNodes];
};

// Create links between people and their cities
export const createLinks = () => {
  return people.map(person => ({
    source: person.id,
    target: person.cityId
  }));
};

// Graph configuration
export const graphConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: '#d3d3d3',
    size: 200,
    highlightStrokeColor: 'blue',
    labelProperty: 'name',
    renderLabel: true,
    fontSize: 12,
    fontColor: 'black'
  },
  link: {
    highlightColor: 'lightblue',
    strokeWidth: 2
  },
  height: 600,
  width: 800,
  directed: false,
  automaticRearrangeAfterDropNode: true,
  staticGraph: false,
  staticGraphWithDragAndDrop: false
};
