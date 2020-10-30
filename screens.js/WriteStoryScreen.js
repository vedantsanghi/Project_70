import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            Story_Name: '',
            Author_Name: '',
            Story: '',
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        backgroundColor: 'orange',
                        width: 400
                    }}>Story Hub</Text>
                </View>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Story Name"
                    onChangeText={(text) => {
                        this.setState({ Story_Name: text });
                    }}
                    value={this.state.Story_Name} />

                <TextInput
                    style={styles.inputBox}
                    placeholder="Author Name"
                    onChangeText={(text) => {
                        this.setState({ Author_Name: text });
                    }}
                    value={this.state.Author_Name} />

                <TextInput
                    style={styles.storyInputBox}
                    placeholder="Write the Story here"
                    onChangeText={(text) => {
                        this.setState({ Story: text });
                    }}
                    value={this.state.Story} />

                <TouchableOpacity style={styles.submitButton}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center'
    },

    inputBox: {
        width: 360,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 30,
    },
    storyInputBox: {
        width: 360,
        height: 220,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 30,
    },
    submitButton: {
        marginTop: 30,
        backgroundColor: 'rgb(40,255,30)'
    },
    buttonText: {
        fontSize: 25,
    }
});