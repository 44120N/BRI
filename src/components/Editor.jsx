
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, IconButton, Tooltip } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import HighlightIcon from '@mui/icons-material/Highlight';
import LinkIcon from '@mui/icons-material/Link';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5),
    '&.Mui-disabled': {
      border: 0,
    },
  },
}));

export default function Editor({ onFormatChange }) {
  const [formats, setFormats] = React.useState([]);
  const [linkDialogOpen, setLinkDialogOpen] = React.useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    if (onFormatChange) {
      onFormatChange(newFormats);
    }
  };

  const handleLinkSubmit = () => {
    if (linkUrl) {
      // Handle link insertion
      setLinkDialogOpen(false);
      setLinkUrl('');
    }
  };

  const handleVideoSubmit = () => {
    if (videoUrl) {
      // Handle video insertion
      setVideoDialogOpen(false);
      setVideoUrl('');
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: 'white',
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <Tooltip title="Bold"><FormatBoldIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <Tooltip title="Italic"><FormatItalicIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <Tooltip title="Underline"><FormatUnderlinedIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="strikethrough" aria-label="strikethrough">
          <Tooltip title="Strikethrough"><StrikethroughSIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="highlight" aria-label="highlight">
          <Tooltip title="Highlight"><HighlightIcon /></Tooltip>
        </ToggleButton>
      </StyledToggleButtonGroup>

      <StyledToggleButtonGroup
        size="small"
        exclusive
        value={formats}
        onChange={handleFormat}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <Tooltip title="Align Left"><FormatAlignLeftIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <Tooltip title="Center"><FormatAlignCenterIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <Tooltip title="Align Right"><FormatAlignRightIcon /></Tooltip>
        </ToggleButton>
      </StyledToggleButtonGroup>

      <StyledToggleButtonGroup
        size="small"
        value={formats}
        onChange={handleFormat}
        aria-label="text indentation"
      >
        <ToggleButton value="indent" aria-label="increase indent">
          <Tooltip title="Increase Indent"><FormatIndentIncreaseIcon /></Tooltip>
        </ToggleButton>
        <ToggleButton value="outdent" aria-label="decrease indent">
          <Tooltip title="Decrease Indent"><FormatIndentDecreaseIcon /></Tooltip>
        </ToggleButton>
      </StyledToggleButtonGroup>

      <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
        <IconButton onClick={() => setLinkDialogOpen(true)}>
          <Tooltip title="Insert Link"><LinkIcon /></Tooltip>
        </IconButton>
        <IconButton onClick={() => setVideoDialogOpen(true)}>
          <Tooltip title="Insert Video"><VideoFileIcon /></Tooltip>
        </IconButton>
      </Stack>

      <Dialog open={linkDialogOpen} onClose={() => setLinkDialogOpen(false)}>
        <DialogTitle>Insert Link</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="URL"
            type="url"
            fullWidth
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLinkDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleLinkSubmit}>Insert</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={videoDialogOpen} onClose={() => setVideoDialogOpen(false)}>
        <DialogTitle>Insert Video</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Video URL (.mp4)"
            type="url"
            fullWidth
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVideoDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleVideoSubmit}>Insert</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
