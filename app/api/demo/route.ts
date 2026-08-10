python - <<'PY'
from pathlib import Path

p = Path("app/api/demo/route.ts")
s = p.read_text()

s = s.replace(
    'const sql = neon(process.env.DATABASE_URL!);\n\n',
    '',
    1,
)

s = s.replace(
    '    const body = (await request.json()) as DemoRequest;',
    '    const sql = neon(process.env.DATABASE_URL);\n\n    const body = (await request.json()) as DemoRequest;',
    1,
)

p.write_text(s)
PY
