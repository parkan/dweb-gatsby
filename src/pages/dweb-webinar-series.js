import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockCTA from '../components/PageBlockCTA'
import data_array from '../../static/page-data/dweb-webinar-series.yaml'

function DWebWebinarSeries2022Page() {
    const content = (
        <div>
            <PageBlockOpening fields={data_array[0].PageBlockOpening} />
            <PageBlockFeature fields={data_array[1].PageBlockFeature} />
            <PageBlockFeature fields={data_array[2].PageBlockFeature} />
            <PageBlockFeature fields={data_array[3].PageBlockFeature} />
            <PageBlockFeature fields={data_array[4].PageBlockFeature} />
            <PageBlockFeature fields={data_array[5].PageBlockFeature} />
            <PageBlockFeature fields={data_array[6].PageBlockFeature} />
            <PageBlockCTA fields={data_array[7].PageBlockCTA} />
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default DWebWebinarSeries2022Page
