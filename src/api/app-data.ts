import { fetchStateInfo } from '$services';
import { stateInfo } from '$utils';
import { createQuery } from '@tanstack/svelte-query';

export const AppData = () => {
	const stateInfoResult = createQuery({
		queryKey: [stateInfo],
		queryFn: fetchStateInfo
	});

	return {
		stateInfoResult
	};
};
