import express, { Request, Response } from 'express';
import Event from '../models/Event';

const router = express.Router();

//Create Event
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, date } = req.body;

    const newEvent = new Event({
      title,
      description,
      date: new Date(date),
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating event', error });
  }
});

//Get All Events
router.get('/', async (_req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events', error });
  }
});

//Get Event by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        res.status(200).json(event);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving event', error });
    }
  });
  

//Update Event
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { title, description, date } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, date: new Date(date) },
      { new: true }
    );

    if (!updatedEvent) res.status(404).json({ message: 'Event not found' });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating event', error });
  }
});

//Delete Event
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});

export default router;
