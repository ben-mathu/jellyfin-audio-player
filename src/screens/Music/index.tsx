import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParams } from './types';
import Albums from './stacks/Albums';
import Album from './stacks/Album';
import RecentAlbums from './stacks/RecentAlbums';
import Search from './stacks/Search';
import { THEME_COLOR } from 'CONSTANTS';
import { t } from '@localisation';
import useDefaultStyles from 'components/Colors';

const Stack = createStackNavigator<StackParams>();

function MusicStack() {
    const defaultStyles = useDefaultStyles();

    return (
        <Stack.Navigator initialRouteName="RecentAlbums" screenOptions={{
            headerTintColor: THEME_COLOR,
            headerTitleStyle: defaultStyles.stackHeader
        }}>
            <Stack.Screen name="RecentAlbums" component={RecentAlbums} options={{ headerTitle: t('recent-albums') }} />
            <Stack.Screen name="Albums" component={Albums} options={{ headerTitle: t('albums') }} />
            <Stack.Screen name="Album" component={Album} options={{ headerTitle: t('album') }} />
            <Stack.Screen name="Search" component={Search} options={{ headerTitle: t('search') }} />
        </Stack.Navigator>
    );
}

export default MusicStack;