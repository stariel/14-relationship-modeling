'use strict';

import express from 'express';
import Albums from '../models/albums.js';
import Bands from '../models/bands.js';
const router = express.Router();

router.get('/albums', (req,res) => {
  Albums
    .find()
    .then(albums => res.send(albums))
    .catch(err => res.sendStatus(err));
});

router.get('/api/v1/albums/:id', (req,res,next) => {
  Albums
    .findById(req.params.id)
    .then( albums => res.send(albums) )
    .catch( next );
});

router.post('/albums', express.json(), (req, res) => {
  Albums
    .create(req.body)
    .then(album => res.send(album))
    .catch(err => res.send(err));
});

router.put('/albums', (req, res) => {
  Albums
    .findByIdAndUpdate(req.params.id, req.body)
    .then( albums => res.send(albums) )
    .catch( next );
});

router.delete('/albums/:id', (req, res) => {
  Albums
    .findByIdAndRemove(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

router.get('/bands', (req,res) => {
  Albums
    .find()
    .then(albums => res.send(albums))
    .catch(err => res.sendStatus(err));
});

router.get('/api/v1/bands/:id', (req,res,next) => {
  Albums
    .findById(req.params.id)
    .then( albums => res.send(albums) )
    .catch( next );
});

router.post('/bands', express.json(), (req, res) => {
  Albums
    .create(req.body)
    .then(album => res.send(album))
    .catch(err => res.send(err));
});

router.put('/bands', (req, res) => {
  Albums
    .findByIdAndUpdate(req.params.id, req.body)
    .then( albums => res.send(albums) )
    .catch( next );
});

router.delete('/bands/:id', (req, res) => {
  Albums
    .findByIdAndRemove(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

export default router;