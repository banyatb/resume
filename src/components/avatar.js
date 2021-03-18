import React from 'react'
import { Image, Row, Col } from 'antd'

const Avatar = ({ profile }) => {
  return (
    <Row style={{ padding: '20px' }}>
      <Col flex="auto"></Col>
      <Col flex="150px">
        <Image src={profile} preview={false} className='avatar' />
      </Col>
      <Col flex="auto"></Col>
    </Row>
  )
}

export default Avatar
