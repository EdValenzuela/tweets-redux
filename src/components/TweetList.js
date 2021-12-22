import React from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTweetAction } from '../actions/tweetsActions'

const TweetList = () => {

    const tweets = useSelector(state => state.tweets.tweets);

    const dispatch = useDispatch();
    const deleteTweet = id => dispatch(deleteTweetAction(id));

    const Tweet = ({item:{name, tweet, id}}) => (
        <Card className='mt-4'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{tweet}</Card.Text>
                <Button variant='danger' onClick={ () => deleteTweet(id)}>Eliminar tweet</Button>
            </Card.Body>
        </Card>
    )

    return (
        <>
            {
                tweets.length === 0 ? (
                <Alert variant='danger' className='display-6 mt-4 text-center'>No hay ningún tweets</Alert>) : tweets.map( item => (<Tweet key={item.id} item={item} />))
            }
        </>
    )
}

export default TweetList
