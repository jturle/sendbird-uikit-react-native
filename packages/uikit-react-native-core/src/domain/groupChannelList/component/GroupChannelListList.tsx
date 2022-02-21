import React from 'react';
import { FlatList } from 'react-native';

import type { GroupChannelListProps } from '../types';

const GroupChannelListList: React.FC<GroupChannelListProps['List']> = ({
  renderGroupChannelPreview,
  groupChannels,
  onLoadMore,
  refreshing,
  onRefresh,
  flatListProps,
}) => {
  return (
    <FlatList
      data={groupChannels}
      refreshing={refreshing}
      onRefresh={onRefresh}
      renderItem={({ item }) => renderGroupChannelPreview?.(item)}
      onEndReached={onLoadMore}
      {...flatListProps}
    />
  );
};

export default GroupChannelListList;
