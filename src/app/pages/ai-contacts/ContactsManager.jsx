'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialContacts = [
  { id: 1, firstName: 'John', surname: 'Smith', email: 'john.smith@email.com', phone: '123-456-7890' },
  { id: 2, firstName: 'Jane', surname: 'Doe', email: 'jane.doe@email.com', phone: '234-567-8901' },
  { id: 3, firstName: 'Bob', surname: 'Johnson', email: 'bob.johnson@email.com', phone: '345-678-9012' },
  { id: 4, firstName: 'Alice', surname: 'Williams', email: 'alice.williams@email.com', phone: '456-789-0123' },
  { id: 5, firstName: 'Charlie', surname: 'Brown', email: 'charlie.brown@email.com', phone: '567-890-1234' },
  { id: 6, firstName: 'Diana', surname: 'Miller', email: 'diana.miller@email.com', phone: '678-901-2345' },
  { id: 7, firstName: 'Edward', surname: 'Davis', email: 'edward.davis@email.com', phone: '789-012-3456' },
  { id: 8, firstName: 'Fiona', surname: 'Garcia', email: 'fiona.garcia@email.com', phone: '890-123-4567' },
  { id: 9, firstName: 'George', surname: 'Martinez', email: 'george.martinez@email.com', phone: '901-234-5678' },
  { id: 10, firstName: 'Helen', surname: 'Anderson', email: 'helen.anderson@email.com', phone: '012-345-6789' },
];

export default function ContactsManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: ''
  });

  const handleCreate = () => {
    setEditingContact(null);
    setFormData({ firstName: '', surname: '', email: '', phone: '' });
    setOpenDialog(true);
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData(contact);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleSave = () => {
    if (editingContact) {
      setContacts(contacts.map(c => c.id === editingContact.id ? { ...formData, id: editingContact.id } : c));
    } else {
      const newId = Math.max(...contacts.map(c => c.id), 0) + 1;
      setContacts([...contacts, { ...formData, id: newId }]);
    }
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
    setEditingContact(null);
    setFormData({ firstName: '', surname: '', email: '', phone: '' });
  };

  return (
    <Box>
      <h2>Contacts Manager</h2>
      <Button onClick={handleCreate} variant="contained">Add Contact</Button>
      
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id} secondaryAction={
            <Box>
              <IconButton onClick={() => handleEdit(contact)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(contact.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          }>
            <ListItemText
              primary={`${contact.firstName} ${contact.surname}`}
              secondary={`${contact.email} | ${contact.phone}`}
            />
          </ListItem>
        ))}
      </List>

      <Dialog open={openDialog} onClose={handleCancel}>
        <DialogTitle>{editingContact ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            fullWidth
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Surname"
            fullWidth
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone"
            fullWidth
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
