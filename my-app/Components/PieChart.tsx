import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ChartExample = () => {
    const data = [
        {
            name: 'Wallet',
            population: 67,
            color: '#00003c',
            legendFontColor: '#000',
            legendFontSize: 12,
        },
        {
            name: 'NFTs',
            population: 16,
            color: '#4B004F',
            legendFontColor: '#000',
            legendFontSize: 12,
        },
        {
            name: 'Pension Scheme',
            population: 15,
            color: '#00ff00',
            legendFontColor: '#000',
            legendFontSize: 12,
        },
        {
            name: 'Cryptocurrencies',
            population: 6,
            color: '#ff0000',
            legendFontColor: '#000',
            legendFontSize: 12,
        },
    ];

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                width={screenWidth - 20}
                height={220}
                chartConfig={{
                    color: () => '#000',
                }}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                center={[10, 0]}
                absolute
            />
        </View>
    );
};

export default ChartExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9d8e3', // soft blue background like in the image
    },
});
