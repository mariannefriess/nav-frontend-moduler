import React from 'react';
import AccessibilityOverview from './AccessibilityOverview.mdx';
import MdxContent from './../../../components/mdx-content/MdxContent';
import './styles.less';

const AccessibilityOverviewPage = () => (
    <React.Fragment>
        <MdxContent>{AccessibilityOverview}</MdxContent>
    </React.Fragment>
);

export default AccessibilityOverviewPage;
