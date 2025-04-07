
import React, { useState } from 'react';
import { Stack, TextField, Button, Typography, IconButton, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CONTENT_TYPES = {
  paragraph: "Paragraph",
  formula: "Formula",
  math: "Math Expression",
  heading: "Heading",
  stack: "Stack",
  image: "Image",
  video: "Video",
  list: "List",
  example: "Example",
  table: "Table"
};

export default function BlogEditor() {
  const [blog, setBlog] = useState({
    name: '',
    url: '',
    unit: '',
    subunit: '',
    time: '',
    content: []
  });

  const [preview, setPreview] = useState(null);

  const addContent = (type) => {
    const newContent = {
      type,
      text: '',
      props: {}
    };
    setBlog(prev => ({
      ...prev,
      content: [...prev.content, newContent]
    }));
  };

  const updateContent = (index, field, value) => {
    setBlog(prev => {
      const newContent = [...prev.content];
      newContent[index] = {
        ...newContent[index],
        [field]: value
      };
      return { ...prev, content: newContent };
    });
  };

  const removeContent = (index) => {
    setBlog(prev => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Convert to JSON and show preview
    setPreview(JSON.stringify(blog, null, 2));
  };

  const renderContentEditor = (content, index) => {
    return (
      <Stack 
        key={index} 
        spacing={2} 
        sx={{ 
          border: '1px solid #ccc',
          padding: 2,
          borderRadius: 1,
          marginY: 2 
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{CONTENT_TYPES[content.type]}</Typography>
          <IconButton onClick={() => removeContent(index)} color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>

        {content.type === 'paragraph' && (
          <>
            <TextField
              label="Text"
              multiline
              value={content.text || ''}
              onChange={(e) => updateContent(index, 'text', e.target.value)}
            />
            <TextField
              label="Align"
              value={content.align || ''}
              onChange={(e) => updateContent(index, 'align', e.target.value)}
            />
          </>
        )}

        {content.type === 'math' && (
          <TextField
            label="LaTeX Expression"
            value={content.text || ''}
            onChange={(e) => updateContent(index, 'text', e.target.value)}
          />
        )}

        {content.type === 'heading' && (
          <TextField
            label="Heading Text"
            value={content.text || ''}
            onChange={(e) => updateContent(index, 'text', e.target.value)}
          />
        )}

        {(content.type === 'image' || content.type === 'video') && (
          <>
            <TextField
              label="Source URL"
              value={content.src || ''}
              onChange={(e) => updateContent(index, 'src', e.target.value)}
            />
            <TextField
              label="Alt Text"
              value={content.alt || ''}
              onChange={(e) => updateContent(index, 'alt', e.target.value)}
            />
          </>
        )}
      </Stack>
    );
  };

  return (
    <Stack spacing={3} sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
      <Typography variant="h4">Blog Editor</Typography>
      
      <TextField
        label="Name"
        value={blog.name}
        onChange={(e) => setBlog(prev => ({ ...prev, name: e.target.value }))}
      />
      
      <TextField
        label="URL"
        value={blog.url}
        onChange={(e) => setBlog(prev => ({ ...prev, url: e.target.value }))}
      />
      
      <TextField
        label="Unit"
        value={blog.unit}
        onChange={(e) => setBlog(prev => ({ ...prev, unit: e.target.value }))}
      />
      
      <TextField
        label="Subunit"
        value={blog.subunit}
        onChange={(e) => setBlog(prev => ({ ...prev, subunit: e.target.value }))}
      />
      
      <TextField
        label="Time"
        value={blog.time}
        onChange={(e) => setBlog(prev => ({ ...prev, time: e.target.value }))}
      />

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h6">Content</Typography>
        <Select
          value=""
          displayEmpty
          onChange={(e) => addContent(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="" disabled>Add Content</MenuItem>
          {Object.entries(CONTENT_TYPES).map(([value, label]) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </Stack>

      {blog.content.map((content, index) => renderContentEditor(content, index))}

      <Button variant="contained" onClick={handleSubmit}>
        Generate JSON
      </Button>

      {preview && (
        <TextField
          label="Generated JSON"
          multiline
          rows={10}
          value={preview}
          InputProps={{ readOnly: true }}
        />
      )}
    </Stack>
  );
}
