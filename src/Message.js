import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function Message(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2">
                            {props.username}: {props.text}
                    </Typography>
                </CardContent>
            </Card>
         </div>
    )
}

export default Message