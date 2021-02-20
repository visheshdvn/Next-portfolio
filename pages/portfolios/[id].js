import React, { Component } from 'react'
import BaseLayout from "../../components/layouts/BaseLayout";

import {withRouter} from 'next/router'

class Portfolio extends Component {
    render() {
        return (
            <BaseLayout>
                <h1>I am portfolio page</h1>
                {console.log(this.props.router.query.id)}
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)