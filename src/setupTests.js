// Active les matchers de jest-dom pour Testing Library
import '@testing-library/jest-dom';

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/node.js'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
