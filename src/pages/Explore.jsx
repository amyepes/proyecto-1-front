import { Link } from 'react-router'
import { useState } from 'react';
import XploreHero from '../components/Xplore_hero';
import XploreResults from '../components/Xplore_results';

function Explorar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');

    return (
        <>
            <XploreHero 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <XploreResults 
                searchQuery={searchQuery}
                selectedType={selectedType}
            />
        </>
    )
}

export default Explorar;