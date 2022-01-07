#!/usr/bin/env tsno run
import { $ } from 'zx'

$`echo "lol"`

$`echo "console.log('piped')"`.pipe($`node`)
