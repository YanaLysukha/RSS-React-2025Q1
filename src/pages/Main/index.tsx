import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import ListView from '../../components/ListView';
import { getCharacters } from '../../api';
import { ICharacter } from '../../api/types';
import Loader from '../../components/Loader';

type TState = {
    characters: ICharacter[];
    isLoading: boolean;
};

export default class MainPage extends Component<Record<string, never>, TState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            characters: [],
            isLoading: false,
        };
    }

    handleCharacters = async () => {
        this.setState({ isLoading: false });
        const characters = await getCharacters();
        this.setState({ characters, isLoading: true });
    };

    componentDidMount = async () => {
        await this.handleCharacters();
    };

    render() {
        const { characters, isLoading } = this.state;

        return (
            <>
                <SearchBar />
                {isLoading ? <ListView characters={characters}></ListView> : <Loader />}
            </>
        );
    }
}
