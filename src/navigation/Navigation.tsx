import React from 'react';

function Navigation() {


    const [activeItemId, setActiveItemId] = React.useState(
        "#primary"
    );
    return (
        <Navigation
            items={[
                {
                    title: "Colors",
                    itemId: "#colors",
                    subNav: [
                        { title: "Primary", itemId: "#primary" },
                        {
                            title: "Shades",
                            itemId: "#shades",
                            subNav: [
                                { title: "Dark", itemId: "#dark" },
                                {
                                    title: "Disabled",
                                    itemId: "#disabled",
                                    disabled: true
                                }
                            ]
                        }
                    ]
                }
            ]}
            activeItemId={activeItemId}
            onChange={({ item }) =>
                setActiveItemId(item.itemId)
            }
            mapItem={5}
        />
    );

}

export default Navigation;
