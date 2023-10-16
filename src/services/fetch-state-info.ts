import { invoke } from '@tauri-apps/api/tauri';
import { getErrorMessage } from '$utils';
import { stateInfoSchema } from '$schemas';

export async function fetchStateInfo() {
	try {
		const response = await invoke('get_state_info', {});
		const parsedResponse = stateInfoSchema.parse(response);
		return parsedResponse;
	} catch (error) {
		const errorTranslated = getErrorMessage(error);
		throw new Error(errorTranslated);
	}
}
