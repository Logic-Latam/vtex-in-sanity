import React from 'react';
import { useQuery } from 'react-apollo';
import { useCssHandles } from 'vtex.css-handles';
import { useRuntime } from 'vtex.render-runtime';

import { schema } from './schema';
import { defaultProps } from './defaultProps';
import { RonaHeader } from '../../typings/header'; // Use the typings we created earlier

import Query from '../../graphql/SanityHeader.gql'; // GraphQL query for the header
import './style.css';

const CSS_HANDLES = [
    'header',
    'header-wrapper',
    'header-logo',
    'header-search',
    'header-navigation',
    'header-user-actions',
    'header-cart',
    'header-right-actions',
] as const;

const getLocalizedString = (localeString: any, language: string) => {
    if (localeString && typeof localeString === 'object') {
        return localeString[language] || localeString.en || '';
    }
    return localeString || '';
};




const DesktopHeader: StorefrontFunctionComponent<RonaHeader> = ({ logo }) => {
    const { handles } = useCssHandles(CSS_HANDLES);
    const { culture: { language } } = useRuntime();
    const { loading, error, data } = useQuery(Query, {
        fetchPolicy: 'cache-and-network',
    });

    if (loading) {
        return <>Loading...</>;
    }

    if (error) {
        return <>{error.message}</>;
    }

    console.log('data: ', data);

    const header: RonaHeader = data.header[0]; // Assuming query returns a header array
    const { mainNavigation, featuredLinks } = header;

    return (
        <header className={`${handles.header} w-100 bg-header-primary`}>
            {/* Logo and Menu */}
            <div className={`${handles['header-wrapper']} flex justify-between items-center pv4 ph6 mw9 center`}>
                <div className={`${handles['header-logo']} flex items-center`}>
                    <img src={logo} alt="Logo" className="w3 h3" />
                </div>
                {/* Search Bar */}
                <div className={`${handles['header-search']} flex items-center w-50`}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-90 pa2 br2"
                    />
                    <button className="w-10 flex items-center justify-center pa2">
                        🔍
                    </button>
                </div>
                {/* Right Actions (Sign-In, Cart, etc.) */}
                <div className={`${handles['header-user-actions']} flex items-center`}>
                    <a href="#" className="ph4">Hello, Sign in</a>
                    <a href="#" className={`${handles['header-cart']} ph4`}>
                        🛒
                    </a>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`${handles['header-navigation']} flex justify-center bg-header-secondary pv3`}>
                {mainNavigation?.map((menu, index) => (
                    <a
                        key={menu.title ? getLocalizedString(menu.title, language) : index}
                        href="#"
                        className="ph4 c-on-base--inverted f6 fw6 no-underline underline-hover"
                    >
                        {menu.title ? getLocalizedString(menu.title, language) : menu.title}
                    </a>
                ))}
            </nav>

            {/* Featured Links */}
            <div className={`${handles['header-right-actions']} flex justify-center bg-header-tertiary pv3`}>
                {featuredLinks?.map((link, index) => (
                    <a
                        key={getLocalizedString(link.title, language) || index}
                        href={getLocalizedString(link.url, language) || '#'}
                        className="ph4 c-on-base--inverted f6 fw6 no-underline underline-hover"
                    >
                        {getLocalizedString(link.title, language)}
                    </a>
                ))}
            </div>
        </header>
    );
};

DesktopHeader.schema = schema;
DesktopHeader.defaultProps = defaultProps;

export default DesktopHeader;
