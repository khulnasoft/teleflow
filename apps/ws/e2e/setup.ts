import { DalService } from '@teleflow/dal';
import { wsTestServer } from '@teleflow/testing';

import { bootstrap } from '../src/bootstrap';

const dalService = new DalService();

before(async () => {
  await dalService.connect(String(process.env.MONGO_URL));
  await wsTestServer.create(await bootstrap());
});

after(async () => {
  try {
    await wsTestServer.teardown();

    await dalService.destroy();
  } catch (e) {
    if (e.code !== 12586) {
      throw e;
    }
  }
});
