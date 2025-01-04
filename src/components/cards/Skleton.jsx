import React from 'react'

const Skleton = (props) => {
    return (
        <>
            <ContentLoader
                speed={0.5}
                width={250}
                height={380}
                viewBox="0 0 250 380"
                backgroundColor="#c7c7c7"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="64" y="279" rx="2" ry="2" width="94" height="24" />
                <rect x="27" y="324" rx="2" ry="2" width="49" height="41" />
                <rect x="11" y="58" rx="0" ry="0" width="201" height="201" />
                <rect x="91" y="323" rx="2" ry="2" width="49" height="41" />
                <rect x="151" y="323" rx="2" ry="2" width="49" height="41" />
            </ContentLoader>

        </>
    )
}

export default Skleton
