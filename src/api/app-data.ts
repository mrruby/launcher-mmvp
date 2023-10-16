import { fetchStateInfo } from '$services';
import { stateInfo } from '$utils';
import { useQuery } from '@sveltestack/svelte-query';

export const AppData = () => {
	const stateInfoResult = useQuery(stateInfo, fetchStateInfo);

	return {
		stateInfoResult
	};
};
