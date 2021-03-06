import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileContent = props => {
    const { children, className, twoColumns, ...rest } = props;

    const tileContentClasses = classnames(
        'fd-tile__content',
        {
            'fd-tile__content--2-col': twoColumns
        },
        className
    );

    return (
        <div {...rest} className={tileContentClasses}>
            {twoColumns ? React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    className: classnames(child.className, 'fd-tile__section')
                });
            }) : children }
        </div>
    );
};

TileContent.displayName = 'Tile.Content';

TileContent.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to split TileContent into two columns with a 0.25rem vertical padding.
     * Any children must be wrapped in 2 top level `<div>` elements.
    */
    twoColumns: PropTypes.bool
};

export default TileContent;
