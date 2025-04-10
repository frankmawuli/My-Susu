import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ChartExample = () => {
    return (
        <View style={styles.container}>
            <LineChart
                data={{
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    datasets: [
                        {
                            data: [1125, 1180, 1160, 1190, 1210, 1235, 1200, 1210, 1150, 1240, 1250],
                            color: () => `red`, // red line
                        },
                    ],
                }}
                width={screenWidth -10}
                height={300}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: () => `#000`, // axes and text color (black)
                    labelColor: () => `#000`,
                    propsForDots: {
                        r: '0',
                    },
                }}
                withInnerLines={true}
                withOuterLines={false}
                bezier={false}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

export default ChartExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 30,
        backgroundColor: '#ffffff', // container background
    },
});
