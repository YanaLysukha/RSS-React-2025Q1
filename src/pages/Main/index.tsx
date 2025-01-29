import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import ListView from '../../components/ListView';
import { getCharacters, searchCharacters } from '../../api';
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

    handleCharacters = async (value?: string) => {
        this.setState({ isLoading: false });
        if (value) {
            const characters = await searchCharacters(value);
            this.setState({ characters, isLoading: true });
        } else {
            const characters = await getCharacters();
            this.setState({ characters, isLoading: true });
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('value', e.target.value);
    };

    componentDidMount = async () => {
        const value = localStorage.getItem('value');
        if (value) {
            await this.handleCharacters(value);
        } else {
            await this.handleCharacters();
        }
    };

    render() {
        const { characters, isLoading } = this.state;

        return (
            <>
                <SearchBar handleChange={this.handleChange} handleSearch={this.handleCharacters} />
                {isLoading ? <ListView characters={characters}></ListView> : <Loader />}
            </>
        );
    }
}
