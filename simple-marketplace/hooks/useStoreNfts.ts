import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { DEFAULT_STORES } from '../config/constants';
import { v2MarketPlaceGetStoreNfts } from '../queries/marketplace.queries';
import { StoreNfts } from '../types/types';

const useStoreNfts = () => {
  const [nfts, setNfts] = useState<StoreNfts[]>([]);

  const stores = process.env.NEXT_PUBLIC_STORES || DEFAULT_STORES;

  const { loading } = useQuery(v2MarketPlaceGetStoreNfts, {
    variables: { condition: { nft_contract_id: { _in: [stores] } } },
    onCompleted: (data) => {
      const storeData = data?.mb_views_nft_metadata_unburned;
      setNfts(storeData);
    },
  });

  return { nfts, loading };
};

export default useStoreNfts;
