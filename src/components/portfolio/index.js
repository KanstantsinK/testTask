import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters/extend';
import {Text, GradientIcon, CategorySelector} from '../common';
import PortfolioList from './portfolioList';
import Search from '../../assets/search';
import SearchBar from '../searchBar';
import {useCloseOnHardwareBackPress} from '../../hooks';
import {styles} from './styles';
import {getCategory, getIndex} from '../../utils';

const data = require('../../data/test.json');

const portfolio = () => {
  const [valuesData, setValuesData] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchActive, setSearchActive] = useState(false);
  const [portfolioFilters, setPortfolioFilters] = useState({
    filter1: '',
    filter2: '',
    filter3: '',
  });

  const updateSelectedNode = useCallback(node =>
    setSelectedNode({
      balance: node.balance,
      category: getCategory(node.key),
      key: node.key,
    }),
  );

  const categories = ['category A', 'category B', 'category C'];
  const filters = ['filter1', 'filter2', 'filter3'];

  useCloseOnHardwareBackPress();

  useEffect(() => {
    const valuesList = (data, selectedCategory) => {
      const categoriesData = Object.entries(data);
      const addKeys = (key, values) =>
        values.map((value, index) => ({...value, key: `${key}-${index}`}));
      const mapData = ([key, values]) => [
        key,
        addKeys(key.charAt(key.length - 1).toLowerCase(), values),
      ];

      return categoriesData
        .map(mapData)
        .filter(([category, values]) => {
          if (selectedCategory) {
            return category === selectedCategory;
          } else {
            return true;
          }
        })
        .reduce((acc, [category, values]) => acc.concat(values), [])
        .filter(element => {
          if (selectedFilter && portfolioFilters[selectedFilter] !== null) {
            return element.balance
              .toString()
              .startsWith(portfolioFilters[selectedFilter]);
          } else {
            return true;
          }
        })
        .sort((a, b) => getIndex(a.key) - getIndex(b.key));
    };

    const categoriesValues = valuesList(data, selectedCategory);

    setValuesData(categoriesValues);
  }, [portfolioFilters, selectedCategory, selectedFilter]);

  useEffect(() => {
    if (!selectedNode && valuesData) {
      setSelectedNode({
        balance: valuesData[0].balance,
        category: getCategory(valuesData[0].key),
      });
    }
  }, [selectedNode, valuesData]);

  const handleSearchPress = useCallback(() => {
    setSearchActive(true);
    setSelectedFilter(filters[0]);
  });

  const updateFilter = useCallback(text => {
    if (!selectedFilter) {
      setPortfolioFilters(prevState => ({
        ...prevState,
        [filters[0]]: text,
      }));
      setSelectedFilter(filters[0]);
    } else {
      setPortfolioFilters(prevState => ({
        ...prevState,
        [selectedFilter]: text,
      }));
    }
  });

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={moderateScale(30, 15)}
      behavior="position"
      enabled>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.portfolioContainer}>
          <View style={styles.portfolioSection}>
            <View style={styles.portfolioHeader}>
              <View style={styles.dot} />
              <Text>Your Portfolio</Text>
            </View>
            <View style={styles.selectedValueSection}>
              {selectedNode && (
                <GradientIcon category={selectedNode.category} />
              )}
              {selectedNode && (
                <Text style={styles.selectedValueText}>
                  {selectedNode.balance}
                </Text>
              )}
            </View>
            <CategorySelector
              categories={categories}
              active={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </View>
          <View style={styles.recentValuesSection}>
            {!searchActive ? (
              <View style={styles.recentValuesHeader}>
                <View style={styles.dot} />
                <Text>Recent Values</Text>
                <TouchableOpacity
                  onPress={handleSearchPress}
                  style={styles.searchButton}>
                  <Search style={styles.search} />
                </TouchableOpacity>
              </View>
            ) : (
              <SearchBar
                value={portfolioFilters[selectedFilter]}
                onEdit={updateFilter}
              />
            )}
            <CategorySelector
              categories={filters}
              active={selectedFilter}
              onSelect={setSelectedFilter}
              defaultFirst
            />
          </View>
          <PortfolioList
            onPress={updateSelectedNode}
            selected={selectedNode ? selectedNode.key : null}
            extraData={selectedNode}
            data={valuesData}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default portfolio;
