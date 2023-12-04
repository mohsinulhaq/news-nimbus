import {memo} from 'react';
import {
  Modal,
  ModalDialog,
  ModalClose,
  DialogTitle,
  DialogContent,
  Autocomplete,
} from '@mui/joy';
import {useSelector} from 'react-redux';
import {RootState} from '../../store.ts';
import {
  getAuthorsFromStorage,
  getSourcesFromStorage,
} from '../../utils/localStorageUtils.ts';

export interface SettingsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}

export const SettingsModal = memo(
  ({isOpen, setIsOpen, onClose}: SettingsModalProps) => {
    const {authors, sources} = useSelector((state: RootState) => state.meta);

    return (
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          onClose();
        }}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <ModalDialog>
          <ModalClose />
          <DialogTitle>Preferences</DialogTitle>
          <DialogContent sx={{gap: 1}}>
            <Autocomplete
              multiple
              placeholder="Authors"
              defaultValue={getAuthorsFromStorage()}
              options={authors}
              onChange={(_, value) => {
                localStorage.setItem('news-nimbus:authors', value.join(','));
              }}
            />
            <Autocomplete
              multiple
              placeholder="Sources"
              defaultValue={getSourcesFromStorage()}
              options={sources}
              onChange={(_, value) => {
                localStorage.setItem('news-nimbus:sources', value.join(','));
              }}
            />
          </DialogContent>
        </ModalDialog>
      </Modal>
    );
  }
);

SettingsModal.displayName = 'SettingsModal';
