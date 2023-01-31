import React, { createContext, useState } from 'react';

import type { SendbirdOpenChannel } from '@sendbird/uikit-utils';
import { NOOP, SendbirdFileMessage, SendbirdUserMessage } from '@sendbird/uikit-utils';

import ProviderLayout from '../../../components/ProviderLayout';
import { useLocalization, useSendbirdChat } from '../../../hooks/useContext';
import type { OpenChannelContextsType, OpenChannelModule } from '../types';

export const OpenChannelContexts: OpenChannelContextsType = {
  Fragment: createContext({
    headerTitle: '',
    channel: {} as SendbirdOpenChannel,
    setMessageToEdit: NOOP,
  }),
};

export const OpenChannelContextsProvider: OpenChannelModule['Provider'] = ({
  children,
  channel,
  keyboardAvoidOffset,
}) => {
  const { currentUser } = useSendbirdChat();
  const { STRINGS } = useLocalization();
  const [messageToEdit, setMessageToEdit] = useState<SendbirdUserMessage | SendbirdFileMessage>();

  return (
    <ProviderLayout>
      <OpenChannelContexts.Fragment.Provider
        value={{
          headerTitle: STRINGS.GROUP_CHANNEL.HEADER_TITLE(currentUser?.userId ?? '', {} as any),
          channel,
          keyboardAvoidOffset,
          messageToEdit,
          setMessageToEdit,
        }}
      >
        {children}
      </OpenChannelContexts.Fragment.Provider>
    </ProviderLayout>
  );
};
