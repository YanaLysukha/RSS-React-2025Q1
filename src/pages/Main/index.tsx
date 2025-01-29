import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import ListView from '../../components/ListView';
import { getCharacters } from '../../api';
import { ICharacter } from '../../api/types';

type TState = {
    characters: ICharacter[];
};

export default class MainPage extends Component<Record<string, never>, TState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            characters: [],
        };
    }

    handleCharacters = async () => {
        const characters = await getCharacters();
        this.setState({ characters });
    };

    // componentDidMount = async () => {
    //     await this.handleCharacters();
    // };

    render() {
        const { characters } = this.state;

        return (
            <>
                <SearchBar />
                <ListView characters={characters}></ListView>
            </>
        );
    }
}
