/*
 * @Description: In User Settings Edit
 * @Author: southerly
 * @Date: 2021-02-21 16:29:01
 * @LastEditors: southerly
 * @lastEditTime: Do not edit
 */

import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
    fetch('/api/v2/groups/southerly/repos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'X-Auth-Token': 'v0I240I6AH8wYcl4HitFMVB5X1bjm71r2v9ADW0m'
        },
    }).then(res => {
        console.log(res.json())
        return res.json()
    }).then(data => {
        this.setState({ users: data })
    })

    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <div style={{
                    border: '1px solid #333'
                }}>
                    kkk
        </div>
            </div>
        </Layout>
    );
}

export default Hello;