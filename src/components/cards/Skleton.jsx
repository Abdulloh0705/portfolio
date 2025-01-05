import React from 'react'
import ContentLoader from 'react-content-loader'

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
                <rect x="47" y="241" rx="2" ry="2" width="140" height="8" />
                <rect x="12" y="313" rx="4" ry="4" width="62" height="42" />
                <rect x="-733" y="670" rx="2" ry="2" width="241" height="156" />
                <rect x="-2" y="7" rx="0" ry="0" width="250" height="200" />
                <rect x="46" y="252" rx="0" ry="0" width="140" height="8" />
                <rect x="95" y="315" rx="4" ry="4" width="62" height="42" />
                <rect x="176" y="311" rx="4" ry="4" width="62" height="42" />
            </ContentLoader>

        </>
    )
}

export default Skleton
