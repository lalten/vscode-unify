#!/usr/bin/env python3

"""A wrapper around unifiy that formats a python file received on stdin."""

import os
import sys

import unify

if __name__ == "__main__":
    snippet = sys.stdin.read()
    preferred_quote = os.getenv("PREFERRED_QUOTE", "'")
    formatted = unify.format_code(snippet, preferred_quote)
    print(formatted, end="")
