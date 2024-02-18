import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const SportsPane = () => {
    const games = [
        {
            title: 'FIFA 23',
            image: require('assets/img/fifa2023.jpeg'),
        },
        {
            title: 'Valorant',
            image: require('assets/img/valorant.jpeg'),

        },
        {
            title: 'Farcry 3',
            image: require('assets/img/farcry3.jpeg'),
        },
        {
            title: 'Call of Duty Modern Warfare 3',
            image: require('assets/img/callofdutymw3.png'),
        },
        {
            title: 'Assassins Creed',
            image: require('assets/img/assassinscreed.jpeg'),
        },

    ];

    const sports = [
        {
            title: 'Soccer',
            image: require('assets/img/soccer.jpeg'),
        },
        {
            title: 'Badminton',
            image: require('assets/img/badminton.jpeg'),
        },
    ];

    return (
        <div>
            <h2>Computer Games</h2>
            <Grid container spacing={2}>
                {games.map((game, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <img style={{minHeight: '200px'}} src={game.image} alt={game.title} />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {game.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <h2>Sports</h2>
            <Grid container spacing={2}>
                {sports.map((sport, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <img src={sport.image} alt={sport.title} />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {sport.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SportsPane;
