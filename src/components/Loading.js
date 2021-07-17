import React from 'react';

function Loading(props) {
    return (
            <div className="table-loader spinner-border text-primary" role="status">
                <span className="sr-only"><p>Loading...</p></span>
            </div>
    );
}

export default Loading;